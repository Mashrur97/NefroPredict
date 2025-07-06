
import { toast } from 'react-toastify';
export const getFav =()=>{
    const b = localStorage.getItem('favs');
    if(b) return JSON.parse(b);
    return [];
}
export const addFav = lawyer =>{
    const arr = getFav();
    const exist = arr.find(p => p.id===lawyer.id);
    if(!exist){
    arr.push(lawyer);
    localStorage.setItem('favs',JSON.stringify(arr)) 
    toast.success(`Appointment with ${lawyer.name} has been added`);
    }else{
    toast.warn("Appointment is already added");
    }
    
}
export const removefav = (id) =>{
    const fav = getFav();
    const remaining = fav.filter(phone => phone.id !== id);
    localStorage.setItem('favs',JSON.stringify(remaining)) 
}