import { ColumnDef } from "@tanstack/react-table"
import { Project, ProjectCategory, ProjectStatus, User } from "@prisma/client"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, ArrowUpDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type ProjectWithRelations = Project & {
  projectCategory: ProjectCategory;
  user: User;
}

const statusOptions = ["PENDING", "INITIALIZED", "PROCESSING", "COMPLETED"];

export const getColumns = (
  handleStatusChange: (id: string, newStatus: ProjectStatus) => void,
  handleDelete: (id: string) => void,
  openTokenModal: (projectId: string) => void
): ColumnDef<ProjectWithRelations>[] => [
  {
    accessorKey: "projectCategory.name",
    header: "Name",
  },
  {
    accessorKey: "user.email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          User Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => row.original.user.email,
  },
  {
    accessorKey: "createdAt",
    header: "Date",
    cell: ({ row }) => {
      return new Date(row.getValue("createdAt")).toLocaleDateString()
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const project = row.original
      return (
        <Select
          defaultValue={project.status}
          onValueChange={(value) => {
            const newStatus = value as ProjectStatus;
            handleStatusChange(project.id, newStatus)
            if (newStatus === "COMPLETED") {
              openTokenModal(project.id)
            }
          }}
        >
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            {statusOptions.map((status) => (
              <SelectItem key={status} value={status}>
                {status}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )
    },
  },
  {
    accessorKey: "user.tokenBalance",
    header: "User Token Balance",
    cell: ({ row }) => row.original.user.tokenBalance,
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const project = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => handleDelete(project.id)}>
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
];