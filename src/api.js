import { API_URL } from "./config"

export const getAllCategories = async() => {
    const request = await fetch(`${API_URL}categories.php`)
    return await request.json()
}

export const getMealsByCategories = async(categories) => {
    const request = await fetch(`${API_URL}filter.php?c=${categories}`)
    return await request.json()
}

export const getMealsById = async(mealsid) => {
    const request = await fetch(API_URL + 'lookup.php?i=' + mealsid)
    return await request.json()
}