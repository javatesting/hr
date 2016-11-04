/**
 * Created by MBodnar on 04.11.2016.
 */


export interface BaseService {

    getAllEntity(): any;
    
    getEntityById(id: string): any;
}
