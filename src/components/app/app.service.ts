import { Injectable } from '@nestjs/common';
import Consts from '../../common/consts';

@Injectable()
export class AppService {
  getSanityCheck(): string {
    return Consts.sanityMessage;
  }
}
