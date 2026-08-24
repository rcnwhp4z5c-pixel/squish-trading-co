-- Squish Trading Co. schema

-- Users are managed by Supabase Auth. We store additional member profile info here.

CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name text,
  teacher_class text,
  preferred_location text,
  membership_level text,
  joined_at timestamptz DEFAULT now(),
  agreement boolean DEFAULT false
);

-- Join requests from non-auth users (no email required)
CREATE TABLE IF NOT EXISTS join_requests (
  id bigserial PRIMARY KEY,
  name text NOT NULL,
  teacher_class text,
  preferred_location text,
  membership_level text,
  agreement boolean NOT NULL,
  status text DEFAULT 'Pending',
  created_at timestamptz DEFAULT now()
);

-- Trade requests
CREATE TABLE IF NOT EXISTS trade_requests (
  id bigserial PRIMARY KEY,
  requester_id uuid REFERENCES auth.users(id),
  requester_name text,
  have_item text NOT NULL,
  want_item text,
  specific_item text,
  preferred_location text,
  notes text,
  agreement boolean NOT NULL,
  status text DEFAULT 'Pending',
  assigned_staff uuid REFERENCES auth.users(id),
  created_at timestamptz DEFAULT now()
);

-- Notifications (for staff/manager)
CREATE TABLE IF NOT EXISTS notifications (
  id bigserial PRIMARY KEY,
  recipient_role text NOT NULL,
  payload jsonb,
  is_read boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Community messages
CREATE TABLE IF NOT EXISTS messages (
  id bigserial PRIMARY KEY,
  author_id uuid REFERENCES auth.users(id),
  author_name text,
  content text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Reports on messages or users
CREATE TABLE IF NOT EXISTS reports (
  id bigserial PRIMARY KEY,
  reporter_id uuid,
  target_type text,
  target_id text,
  reason text,
  created_at timestamptz DEFAULT now()
);

