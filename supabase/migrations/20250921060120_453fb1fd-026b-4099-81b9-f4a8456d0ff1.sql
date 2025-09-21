-- Create a table for approved users
CREATE TABLE public.approved_users (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  full_name TEXT NOT NULL,
  role TEXT NOT NULL,
  department TEXT NOT NULL,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.approved_users ENABLE ROW LEVEL SECURITY;

-- Create policies for approved_users (only admins can manage)
CREATE POLICY "Approved users are viewable by authenticated users" 
ON public.approved_users 
FOR SELECT 
TO authenticated
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
NEW.updated_at = now();
RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_approved_users_updated_at
BEFORE UPDATE ON public.approved_users
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert some sample approved users
INSERT INTO public.approved_users (email, full_name, role, department) VALUES
('admin@kmrl.org', 'System Administrator', 'executive', 'admin'),
('hr.manager@kmrl.org', 'HR Manager', 'hr', 'admin'),
('engineer@kmrl.org', 'Lead Engineer', 'engineering', 'technical'),
('safety.officer@kmrl.org', 'Safety Officer', 'maintenance', 'safety');