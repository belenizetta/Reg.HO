import { ApiProperty } from '@nestjs/swagger';

export class ControlDTO {
  readonly user: number;
  @ApiProperty()
  readonly project: number;
  @ApiProperty()
  readonly role: number;
  @ApiProperty()
  readonly intended_hours: number;
  @ApiProperty()
  readonly user_id: number;
}
