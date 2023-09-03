CREATE TABLE public.role (
    name text PRIMARY KEY
);

INSERT INTO public.role (name) VALUES ('moderator'), ('user');

CREATE TABLE public.Person (
    id uuid DEFAULT gen_random_uuid () NOT NULL,
    email text NOT NULL,
    given_name text NOT NULL,

    role text NOT NULL REFERENCES public.role(name),
    PRIMARY KEY (id)
);

INSERT INTO public.Person (id, email, given_name, role) VALUES ('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', 'example@example.com', 'John', 'moderator');