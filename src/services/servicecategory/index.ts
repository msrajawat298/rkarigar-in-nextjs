import Cookies from 'js-cookie';


export const add_service_category = async (formData : any) => {

    try {
        const res = await fetch('/api/admin/service-category/add-service-category', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${Cookies.get('token')}`
            },
            body: JSON.stringify(formData)
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.log('Error while calling add_service_category API (services)' + error);
    }

   
}