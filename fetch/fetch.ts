import axios from "axios"

export const getChatGPTMsg = async (params: any, config: any) => {
  return axios.post('https://api.openai.com/v1/chat/completions', params, {
    headers: {
      Authorization: `Bearer ${config.key}`,
    }
  })
}

