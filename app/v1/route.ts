
export async function GET() {
    return new Response ("Hello Bhaiyaa! 👻", {
        headers: {
            "content-type": "application/json",
        },
    });
}