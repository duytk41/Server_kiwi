// đây là model gửi đi

import { Dish } from "../dish.entity";

export class DishGetResponseDTO  {
    status: Boolean;
    message: String;
    data: Dish | Dish[];
}