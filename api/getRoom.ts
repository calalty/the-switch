export const getRoom = async (slug: string) => {
  try {
    const res = await fetch(`/api/getRoom/${slug}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error(`Failed to fetch room. Status: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.error("Error creating room:", error);
    return null;
  }
};
