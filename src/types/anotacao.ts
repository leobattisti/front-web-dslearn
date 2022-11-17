import { Ave } from "./ave"
import { Usuario } from "./usuario"

export type Anotacao = {
     id: number;
     data: Date;
     titulo: string;
     usuario: Usuario;
     ave: Ave;
}