type RequestedStates = Array<{ sigla: string }>

type CachedUfs = {
  data: string[]
  lastFetch: number
}

const cacheKey = '@coffeeShop-1.0.0:ufs'
const statesUrl = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
const maxTolerance = 60 * 60 * 24 // 1 day

const isTolerable = (lastFetch: number) => {
  /*
    Diferença entre o tempo atual 
    e o tempo da última requisição.
  */
  const diff = Date.now() - lastFetch

  return diff < maxTolerance * 1000
}

const fetchUfsAndCache = async () => {
  const data = await fetch(statesUrl)
  const states: RequestedStates = await data.json()
  const ufs = states.map((state) => state.sigla)

  localStorage.setItem(
    cacheKey,
    JSON.stringify({ data: ufs, lastFetch: Date.now() }),
  )

  return ufs
}

export const getUFs = async () => {
  const cachedUFs = localStorage.getItem(cacheKey)

  /* 
    Se não tiver nada no cache, busca novamente e salva no cache
    E retornar os dados 
  */
  if (!cachedUFs) {
    return fetchUfsAndCache()
  }

  try {
    // Fazer o parse do JSON do cache
    const { data, lastFetch } = JSON.parse(cachedUFs) as CachedUfs

    // Se o cache estiver valido, retorna os dados
    if (isTolerable(lastFetch)) {
      return data
    }

    /* 
      Se o cache estiver invalido, busca novamente e salva no cache.
      E retorna os dados 
    */
    return fetchUfsAndCache()
  } catch (error) {
    /* 
      Se houver qualquer erro, busca novamente e salva no cache.
      E retorna os dados 
    */
    return fetchUfsAndCache()
  }
}
