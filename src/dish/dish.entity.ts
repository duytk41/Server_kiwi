

// entity là một class đại diện cho một bảng trong database
// entity này sẽ được sử dụng để tương tác với database

export class Dish {
    id: string;
    name: string;
    cover: string;
    price: number;
    time: number;
    maximumPOrder: number;
    restaurantID: string;
    status: string;
}