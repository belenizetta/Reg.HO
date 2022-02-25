import { ApiProperty } from '@nestjs/swagger';

export class UserDTO {
  @ApiProperty()
  readonly name: string;
  @ApiProperty()
  readonly email: string;
  @ApiProperty()
  readonly password: string;
  @ApiProperty()
  readonly phone: string;
  @ApiProperty()
  readonly role: string;
  //   @ApiProperty()
  //   readonly controls: number[];
}
