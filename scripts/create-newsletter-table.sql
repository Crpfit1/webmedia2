-- Create newsletter subscribers table in Supabase
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    prenoms VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    contact VARCHAR(20) NOT NULL,
    indicatif_pays VARCHAR(10) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    is_active BOOLEAN DEFAULT TRUE
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscribers(email);

-- Create index on created_at for analytics
CREATE INDEX IF NOT EXISTS idx_newsletter_created_at ON newsletter_subscribers(created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public inserts (for newsletter signup)
CREATE POLICY "Allow public newsletter signup" ON newsletter_subscribers
    FOR INSERT WITH CHECK (true);

-- Create policy to allow reading for authenticated users only (for admin)
CREATE POLICY "Allow authenticated read" ON newsletter_subscribers
    FOR SELECT USING (auth.role() = 'authenticated');
