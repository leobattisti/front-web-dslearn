import { Ave } from "./ave"
import { Usuario } from "./usuario"

export type Anotacao = {
     id: number;
     data: string;
     titulo: string;
     usuario: Usuario;
     ave: Ave;
}