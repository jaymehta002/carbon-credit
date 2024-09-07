"use client";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowDownIcon, ArrowUpIcon, RefreshCwIcon } from "lucide-react";

export default function WalletPage() {
  const [balance, setBalance] = useState("12,345.67");
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      type: "received",
      amount: "0.5 ETH",
      from: "Alice",
      date: "2023-06-01",
    },
    { id: 2, type: "sent", amount: "0.1 BTC",from: "Alice", to: "Bob", date: "2023-05-30" },
    {
      id: 3,
      type: "received",
      amount: "100 USDT",
      from: "Charlie",
      to: "David",
      date: "2023-05-28",
    },
    { id: 4, type: "sent", amount: "0.2 ETH",from: "Alice", to: "David", date: "2023-05-25" },
  ]);

  const refreshBalance = () => {
    // In a real application, this would fetch the latest balance from an API
    setBalance(
      (parseFloat(balance.replace(",", "")) + Math.random() * 100)
        .toFixed(2)
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    );
  };

  return (
    <div className="p-4 bg-background">
      <h1 className="text-2xl font-bold mb-4">Wallet</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Wallet Balance</CardTitle>
            <CardDescription>Your current crypto balance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold">${balance}</div>
              <Button onClick={refreshBalance} size="icon" variant="outline">
                <RefreshCwIcon className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Send or receive crypto</CardDescription>
          </CardHeader>
          <CardContent className="flex gap-2">
            <Button className="flex-1">
              <ArrowUpIcon className="mr-2 h-4 w-4" /> Send
            </Button>
            <Button className="flex-1" variant="outline">
              <ArrowDownIcon className="mr-2 h-4 w-4" /> Receive
            </Button>
          </CardContent>
        </Card>
      </div>
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>Your latest crypto transactions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between"
              >
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarFallback>
                      {transaction.type === "received"
                        ? transaction.from[0]
                        : (transaction.to ? transaction.to[0] : "U")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">
                      {transaction.type === "received"
                        ? `Received from ${transaction.from}`
                        : `Sent to ${transaction.to}`}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {transaction.date}
                    </p>
                  </div>
                </div>
                <div
                  className={`text-sm font-medium ${
                    transaction.type === "received"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {transaction.type === "received" ? "+" : "-"}
                  {transaction.amount}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
