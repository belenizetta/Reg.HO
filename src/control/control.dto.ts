import { ApiProperty } from "@nestjs/swagger";

export class ControlDTO {
    readonly user: number;
    @ApiProperty()
    readonly project: number;
    @ApiProperty()
    readonly role: number;
    @ApiProperty()
    readonly intended: number;

    
}