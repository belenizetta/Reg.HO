import { ApiProperty } from '@nestjs/swagger';

export class ProjectDTO {
  @ApiProperty()
  readonly name: string;
  @ApiProperty()
  readonly start_date: Date;
  @ApiProperty()
  readonly ending_date: Date;
  @ApiProperty()
  readonly client: string;
  @ApiProperty()
  readonly status: string;
}
