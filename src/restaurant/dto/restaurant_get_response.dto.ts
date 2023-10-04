// đây là model gửi đi

import { Restaurant } from "../restaurant.entity";

export class RestaurantGetResponseDTO  {
    status: Boolean;
    message: String;
    data: Restaurant | Restaurant[];
}