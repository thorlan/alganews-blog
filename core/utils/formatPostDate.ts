import { format, differenceInDays, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export default function formatPostDate(postCreatinDate: string){

    const postDate = new Date(postCreatinDate);
    const today = new Date();
    const dayDiff = differenceInDays(today, postDate);
    
    if (dayDiff > 3){
        return format(postDate, 'dd/MM/yyyy');
    }
    
    return "Há" + formatDistanceToNow(postDate, {
        locale:ptBR,
    });
}