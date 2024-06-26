import path from 'path';
import { system } from '@appium/support';


function getFixture (fix) {
  // Append .bat or .sh if there's no extention
  if (fix.indexOf('.') === -1) {
    fix = fix + (system.isWindows() ? '.bat' : '.sh');
  }
  return path.resolve(__dirname, 'fixtures', fix);
}

export { getFixture };
