// đây là model gửi đi

import { User } from "../user.entity";

export class UserGetResponseDTO  {
    status: Boolean;
    message: String;
    data: User | User[];
}