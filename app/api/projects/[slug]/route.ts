import { getProjectBySlug } from "@/lib/projects";
import { NextResponse } from "next/server";

const ALLOWED_ORIGIN = "https://onursenture.com";

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return NextResponse.json(
      { error: "Project not found" },
      { status: 404, headers: corsHeaders() }
    );
  }

  return NextResponse.json({ project }, { headers: corsHeaders() });
}

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: corsHeaders() });
}
