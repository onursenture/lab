import { getProjects } from "@/lib/projects";
import { NextResponse } from "next/server";

const ALLOWED_ORIGIN = "https://onursenture.com";

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

export async function GET() {
  const projects = getProjects();
  return NextResponse.json({ projects }, { headers: corsHeaders() });
}

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: corsHeaders() });
}
