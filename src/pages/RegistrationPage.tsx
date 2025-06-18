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
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from '@/components/ui/separator';
import { Mail, Lock, UserPlus, TriangleAlert } from 'lucide-react';

const RegistrationPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      setLoading(false);
      return;
    }
    if (!agreedToTerms) {
      setError('You must agree to the terms and conditions.');
      setLoading(false);
      return;
    }

    // Simulate API call for registration
    setTimeout(() => {
      console.log('Registration attempt:', { email, password });
      // For this example, we'll assume registration is successful and redirect.
      // In a real app, you'd handle success/failure from the API.
      navigate('/login?registered=true'); // Redirect to login, maybe with a success query param
      setLoading(false);
    }, 1000);
  };

  console.log('RegistrationPage loaded');

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <Avatar className="mx-auto h-16 w-16 mb-2">
            <AvatarImage src="https://via.placeholder.com/80?text=AppCo" alt="App Logo" />
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
          <CardTitle className="text-2xl font-bold">Create an Account</CardTitle>
          <CardDescription>Join us by filling out the information below.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleRegistration} className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <TriangleAlert className="h-4 w-4" />
                <AlertTitle>Registration Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
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
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="pl-9"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <div className="relative">
                <Lock className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  id="confirm-password"
                  type="password"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="pl-9"
                />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={agreedToTerms}
                onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
              />
              <Label htmlFor="terms" className="text-sm font-normal">
                I agree to the <Link to="/terms" className="text-primary hover:underline">terms and conditions</Link>.
              </Label>
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
               {loading ? 'Creating Account...' : (
                <>
                  <UserPlus className="mr-2 h-4 w-4" /> Sign Up
                </>
              )}
            </Button>
          </form>
          <Separator className="my-6" />
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Already have an account?{' '}
              <Link to="/login" className="font-semibold text-primary hover:underline">
                Log In
              </Link>
            </p>
          </div>
        </CardContent>
         <CardFooter className="text-xs text-center text-gray-500">
            &copy; {new Date().getFullYear()} AppCo. All rights reserved.
        </CardFooter>
      </Card>
    </div>
  );
};

export default RegistrationPage;