

// entity là một class đại diện cho một bảng trong database
// entity này sẽ được sử dụng để tương tác với database

export class Dish {
    id: string;
    name: string;
    dateOfBirth: string;
    dishname: string;
    password: string;
    phone: string; // Số điện thoại
    avatar: string; // ảnh đại diện lấy bằng url
    email: string;
    address: string;
    searchHistory: string[]; // Lịch sử tìm kiếm
    orders: string[]; // Lịch sử đặt hàng
    cart: string[]; // Giỏ hàng
}