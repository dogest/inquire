import { ICOutputDormitoryEnergy } from '../contracts/dormitory';

export function formatAvailableUsage(lower: ICOutputDormitoryEnergy['lower'], upper: ICOutputDormitoryEnergy['upper']) {
  return lower < upper ? `${lower}-${upper}` : (lower || '0');
}
