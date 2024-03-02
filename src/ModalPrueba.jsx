import { useState } from "react";
import { Modal, ModalBody, ModalFooter } from "flowbite-react";

function ModalPrueba() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="bg-blue-500 text-white px-4 py-2"
        onClick={() => setShowModal(true)}
      >
        Abrir Modal
      </button>

      <Modal
        show={showModal}
        size="md"
        popup={true}
        onClose={() => setShowModal(false)}
      >
        <ModalBody>
          <form>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm">
                Email
              </label>
              <input type="email" id="email" className="border p-2 w-full" />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block mb-2 text-sm">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="border p-2 w-full"
              />
            </div>
          </form>
        </ModalBody>

        <ModalFooter>
          <button
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 text-white"
            onClick={() => setShowModal(false)}
          >
            Guardar
          </button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default ModalPrueba;
