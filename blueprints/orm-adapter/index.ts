import { Blueprint, unwrap } from 'denali-cli';
import {
  upperFirst,
  camelCase,
  kebabCase
} from 'lodash';

/**
 * Generates a blank ORM adapter with stubs for all the required methods
 *
 * TODO: generate with denali orm adapter test suite module, and install the module on postinstall
 *
 * @package blueprints
 */
export default class ORMAdapterBlueprint extends Blueprint {

  /* tslint:disable:completed-docs typedef */
  static blueprintName = 'orm-adapter';
  static description = 'Generates a blank ORM adapter with stubs for all the required methods';
  static longDescription = unwrap`
    Usage: denali generate orm-adapter <name> [options]

    Generates a new ORM adapter with stubs for all the required adapter methods. Note: this is
    typically an advanced use case (i.e. using a niche, specialty database). You should check to
    make sure there isn't already a Denali addon that implements the ORM adapter you need.

    Guides: http://denalijs.org/master/guides/data/orm-adapters/
  `;

  static params = '<name>';

  locals(argv: any) {
    let name = argv.name;
    let className = upperFirst(camelCase(name));
    let dasherized = kebabCase(name);
    return { name, className, dasherized };
  }

}
