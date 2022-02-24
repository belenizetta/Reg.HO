import { ApiProperty } from "@nestjs/swagger";

export class ProjectDTO {
    @ApiProperty()
    readonly name: string;
    @ApiProperty()
    readonly fecha_inicio: Date;
    @ApiProperty()
    readonly fecha_fin: Date;
    @ApiProperty()
    readonly cliente: string;
    @ApiProperty()
    readonly estado: string;

}