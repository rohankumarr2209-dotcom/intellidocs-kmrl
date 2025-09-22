-- Fix RLS policy to allow reading approved users during login
DROP POLICY IF EXISTS "Approved users are viewable by authenticated users" ON public.approved_users;

-- Create new policy that allows reading approved users for login verification
CREATE POLICY "Allow reading approved users for login verification" 
ON public.approved_users 
FOR SELECT 
USING (true);

-- Only allow authenticated users to modify approved users
CREATE POLICY "Only authenticated users can modify approved users" 
ON public.approved_users 
FOR ALL 
USING (auth.role() = 'authenticated');