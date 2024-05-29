// Input
import '@/components/ui/Input/inputSetFocus';
import '@/components/ui/Input/inputSearch';
import '@/components/ui/Input/select';
import '@/components/ui/Input/textarea';
import '@/components/ui/Input/inputFile';
import '@/components/ui/Input/inputCount';

import MyModal from '@/components/ui/MyModal/MyModal';
import Validation from '@/components/ui/Form/Validation';
import Mask from '@/components/ui/Input/mask';

// Input mask
const maskInit = Mask;
maskInit.init();

// Form validator
const validationInit = new Validation();
validationInit.init();

// Modals
const modalInit = new MyModal();
modalInit.init();
