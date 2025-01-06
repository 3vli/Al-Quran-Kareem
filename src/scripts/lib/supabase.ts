import { createClient } from "@supabase/supabase-js";

interface ImportMeta {
	env: {
		VITE_PROJECT_URL: string;
		VITE_PROJECT_ANON_KEY: string;
	};
}

const env = (import.meta as unknown as ImportMeta).env;

const projectUrl = env.VITE_PROJECT_URL;
const projectAnonKey = env.VITE_PROJECT_ANON_KEY;

export const supabase = createClient(projectUrl, projectAnonKey);
