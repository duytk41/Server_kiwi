

// entity là một class đại diện cho một bảng trong database
// entity này sẽ được sử dụng để tương tác với database

export class Restaurant {
    id: string;
    name: string;
    cover: string;
    time: number;
    userID: string;
    dateCreated: string;
    status: string;
}