import axios from "axios";

export async function validateWord(word: string) {
  const requestBody = { guess: word };
  const url = process.env.NEXT_PUBLIC_BACKEND_URL + "/validate";

  try {
    const response = await axios.post(url, requestBody, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error: any) {
    console.log(error);
  }
}
