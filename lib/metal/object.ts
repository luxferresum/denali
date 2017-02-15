import mixin, { MixinApplicator } from './mixin';
import Container from '../runtime/container';

/**
 * The base object class for Denali classes. Adds mixin support.
 *
 * @module denali
 * @submodule metal
 */
export default class DenaliObject {

  /**
   * Apply mixins using this class as the base class. Pure syntactic sugar for the `mixin` helper.
   */
  public static mixin(...mixins: MixinApplicator[]): Function {
    return mixin(this, ...mixins);
  }

  /**
   * The application container instance
   */
  protected static container: Container;

  /**
   * The application container instance
   */
  protected container: Container;

}