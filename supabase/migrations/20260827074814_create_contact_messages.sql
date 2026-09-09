/*
# Create contact_messages table

1. New Tables
   - `contact_messages`
     - `id` (uuid, primary key) — unique identifier for each message
     - `name` (text, not null) — name of the person contacting
     - `email` (text, not null) — reply-to email address
     - `subject` (text) — optional subject line
     - `message` (text, not null) — the message body
     - `created_at` (timestamptz) — when the message was submitted

2. Security
   - Enable RLS on `contact_messages`.
   - Allow anyone (anon + authenticated) to INSERT a message so the public
     contact form works without a login.
   - No SELECT/UPDATE/DELETE policies are added: submitted messages are private
     and cannot be read back through the public API.

3. Notes
   1. This is a public, no-auth site. Only message submission is exposed.
   2. Reading of messages is intentionally not possible via the anon key.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages" ON contact_messages FOR INSERT
  TO anon, authenticated WITH CHECK (true);
