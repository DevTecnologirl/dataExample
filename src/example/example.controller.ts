import { Controller, Get} from '@nestjs/common';

@Controller('data')
export class ExampleController {
    @Get()
    getData() {
        return {
            message: 'Dados do backend'
        };
    }
}
