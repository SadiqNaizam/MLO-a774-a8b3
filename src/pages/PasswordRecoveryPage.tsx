import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, KeyRound, TriangleAlert, CheckCircle2 } from 'lucide-react';

const PasswordRecoveryPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState<{ type: 'error' | 'success'; text: string } | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handlePasswordRecovery = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    // Simulate API call for password recovery
    setTimeout(() => {
      if (email.includes('@')) { // Basic validation
        setMessage({ type: 'success', text: 'If an account exists for this email, a password reset link has been sent.' });
        // Optionally, redirect or clear form after a delay
        // setTimeout(() => navigate('/login'), 3000);
      } else {
        setMessage({ type: 'error', text: 'Please enter a valid email address.' });
      }
      setLoading(false);
    }, 1000);
  };

  console.log('PasswordRecoveryPage loaded');

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
           <Avatar className="mx-auto h-16 w-16 mb-2">
            <AvatarImage src="https://via.placeholder.com/80?text=AppCo" alt="App Logo" />
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
          <CardTitle className="text-2xl font-bold">Forgot Your Password?</CardTitle>
          <CardDescription>
            No worries! Enter your email address below and we'll send you a link to reset it.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handlePasswordRecovery} className="space-y-4">
            {message && (
              <Alert variant={message.type === 'error' ? 'destructive' : 'default'} className={message.type === 'success' ? 'bg-green-50 border-green-300 text-green-700 dark:bg-green-900/50 dark:border-green-700 dark:text-green-300' : ''}>
                {message.type === 'error' ? <TriangleAlert className="h-4 w-4" /> : <CheckCircle2 className="h-4 w-4" />}
                <AlertTitle>{message.type === 'error' ? 'Error' : 'Success'}</AlertTitle>
                <AlertDescription>{message.text}</AlertDescription>
              </Alert>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="pl-9"
                />
              </div>
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Sending...' : (
                <>
                  <KeyRound className="mr-2 h-4 w-4" /> Send Reset Link
                </>
              )}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col items-center space-y-2">
          <Link to="/login" className="text-sm text-primary hover:underline">
            Back to Login
          </Link>
           <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} AppCo. All rights reserved.</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PasswordRecoveryPage;