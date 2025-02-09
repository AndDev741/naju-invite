import { JSONBIN_CONFIG } from "../../config";

const headers = {
  "Content-Type": "application/json",
  "X-Master-Key": JSONBIN_CONFIG.API_KEY,
};

export const getInvites = async () => {
  try {
    const response = await fetch(`${JSONBIN_CONFIG.BASE_URL}${JSONBIN_CONFIG.BIN_ID}/latest`, {
      headers,
    });
    const data = await response.json();
    return data.record.invites || [];
  } catch (error) {
    console.error("Erro ao obter convidados:", error);
    return [];
  }
};

export const saveInvite = async (newInvite) => {
  try {
    const actualInvites = await getInvites();
    const newInvites = [...actualInvites, newInvite];

    const response = await fetch(`${JSONBIN_CONFIG.BASE_URL}${JSONBIN_CONFIG.BIN_ID}`, {
      method: "PUT",
      headers,
      body: JSON.stringify({ invites: newInvites }),
    });

    return await response.json();
  } catch (error) {
    console.error("Erro ao salvar nome:", error);
  }
};
