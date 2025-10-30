import supabase from "../supabase";

export async function getMenuData(){
    const {data , error} = await supabase.from("Menu").select("*");
    if(error){
        throw new Error(error.message);
    }
    return data;
}