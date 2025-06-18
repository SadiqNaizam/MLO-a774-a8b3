import React from 'react';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Users, DollarSign, CreditCard, Activity, Download } from 'lucide-react';

// Placeholder data
const recentSales = [
  { name: "Olivia Martin", email: "olivia.martin@email.com", amount: "+$1,999.00", avatar: "OM", avatarSrc: "https://via.placeholder.com/40/AABBCC/FFFFFF?Text=OM" },
  { name: "Jackson Lee", email: "jackson.lee@email.com", amount: "+$39.00", avatar: "JL", avatarSrc: "https://via.placeholder.com/40/DDEEFF/000000?Text=JL" },
  { name: "Isabella Nguyen", email: "isabella.nguyen@email.com", amount: "+$299.00", avatar: "IN", avatarSrc: "https://via.placeholder.com/40/112233/FFFFFF?Text=IN" },
  { name: "William Kim", email: "will@email.com", amount: "+$99.00", avatar: "WK", avatarSrc: "https://via.placeholder.com/40/445566/FFFFFF?Text=WK" },
  { name: "Sofia Davis", email: "sofia.davis@email.com", amount: "+$39.00", avatar: "SD", avatarSrc: "https://via.placeholder.com/40/778899/FFFFFF?Text=SD" },
];

const transactions = [
  { id: "txn_1", customer: "Liam Johnson", date: "2023-10-23", amount: "$250.00", status: "Paid", paymentMethod: "Visa **** 1234" },
  { id: "txn_2", customer: "Noah Williams", date: "2023-10-24", amount: "$150.75", status: "Pending", paymentMethod: "Mastercard **** 5678" },
  { id: "txn_3", customer: "Emma Brown", date: "2023-10-25", amount: "$320.50", status: "Paid", paymentMethod: "Amex **** 9012" },
  { id: "txn_4", customer: "Oliver Jones", date: "2023-10-26", amount: "$45.99", status: "Failed", paymentMethod: "PayPal" },
  { id: "txn_5", customer: "Ava Garcia", date: "2023-10-27", amount: "$199.00", status: "Paid", paymentMethod: "Visa **** 3456" },
];


const ApplicationDashboardPage = () => {
  console.log('ApplicationDashboardPage loaded');

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Sidebar appName="My Dashboard" className="fixed inset-y-0 left-0 z-10 hidden w-60 flex-col border-r bg-background sm:flex" />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-60"> {/* Adjust pl based on Sidebar width */}
        <Header appName="My Dashboard" />
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,231.89</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+2350</div>
                <p className="text-xs text-muted-foreground">+180.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Sales</CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+12,234</div>
                <p className="text-xs text-muted-foreground">+19% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Now</CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+573</div>
                <p className="text-xs text-muted-foreground">+201 since last hour</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:gap-8 lg:grid-cols-2">
            <Card className="xl:col-span-2">
              <CardHeader className="flex flex-row items-center">
                <div className="grid gap-2">
                  <CardTitle>Transactions</CardTitle>
                  <CardDescription>Recent transactions from your store.</CardDescription>
                </div>
                <Button asChild size="sm" className="ml-auto gap-1">
                  <a href="#"> {/* Placeholder for actual export functionality */}
                    View All
                    <Download className="h-3.5 w-3.5" />
                  </a>
                </Button>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Customer</TableHead>
                      <TableHead className="hidden sm:table-cell">Date</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                      <TableHead className="hidden sm:table-cell">Status</TableHead>
                      <TableHead className="hidden md:table-cell">Payment Method</TableHead>
                       <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {transactions.map((transaction) => (
                      <TableRow key={transaction.id}>
                        <TableCell>
                          <div className="font-medium">{transaction.customer}</div>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">{transaction.date}</TableCell>
                        <TableCell className="text-right">{transaction.amount}</TableCell>
                        <TableCell className="hidden sm:table-cell">{transaction.status}</TableCell>
                        <TableCell className="hidden md:table-cell">{transaction.paymentMethod}</TableCell>
                        <TableCell className="text-right">
                           <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Actions</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>View Details</DropdownMenuItem>
                              <DropdownMenuItem>Refund</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Recent Sales</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-8">
                {recentSales.map((sale) => (
                <div key={sale.email} className="flex items-center gap-4">
                    <div className="h-9 w-9 rounded-full bg-gray-200 flex items-center justify-center text-sm font-semibold" style={{backgroundImage: `url(${sale.avatarSrc})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                        {!sale.avatarSrc && sale.avatar}
                    </div>
                    <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">{sale.name}</p>
                    <p className="text-sm text-muted-foreground">{sale.email}</p>
                    </div>
                    <div className="ml-auto font-medium">{sale.amount}</div>
                </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ApplicationDashboardPage;