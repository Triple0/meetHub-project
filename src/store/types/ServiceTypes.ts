interface ServiceInit {
    status: 'init';
}

interface ServiceLoading {
    status: 'loading';
}
  
interface ServiceLoaded<data> {
    status: 'loaded',
    payload: data,
    isLoading: boolean
}
  
interface ServiceError {
    status: 'error',
    error: Error
}
  
export type ServiceTypes<data> =
| ServiceInit
| ServiceLoading
| ServiceLoaded<data>
| ServiceError;