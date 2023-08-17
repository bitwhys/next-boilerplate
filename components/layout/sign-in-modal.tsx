import Modal from "@/components/shared/modal";
import { signIn } from "next-auth/react";
import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
import { LoadingDots, Google } from "@/components/shared/icons";
import Image from "next/image";
import {Button, Card, Heading, Inset, Text} from "@radix-ui/themes";

const SignInModal = ({
  showSignInModal,
  setShowSignInModal,
}: {
  showSignInModal: boolean;
  setShowSignInModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const [signInClicked, setSignInClicked] = useState(false);

  return (
    <Modal showModal={showSignInModal} setShowModal={setShowSignInModal}>
      <Card className="w-full overflow-hidden  md:max-w-md shadow-5">
        <div className="flex flex-col items-center justify-center space-y-3  px-4 py-6 pt-8 text-center md:px-16">
          <a href="https://precedent.dev">
            <Image
              src="/logo.png"
              alt="Logo"
              className="h-10 w-10 rounded-full"
              width={20}
              height={20}
            />
          </a>
          <Heading className="font-display">Sign In</Heading>
          <Text>
            This is strictly for demo purposes - only your email and profile
            picture will be stored.
          </Text>
        </div>

        <Inset side='bottom' className="flex flex-col space-y-4 border-t border-neutral-7 bg-neutral-3 px-4 py-8 md:px-16">
          <Button
            size='3'
            variant='outline'
            color='gray'
            disabled={signInClicked}
            onClick={() => {
              setSignInClicked(true);
              signIn("google");
            }}
          >
            {signInClicked ? (
              <LoadingDots color="#808080" />
            ) : (
              <>
                <Google className="h-5 w-5" />
                <p>Sign In with Google</p>
              </>
            )}
          </Button>
        </Inset>
      </Card>
    </Modal>
  );
};

export function useSignInModal() {
  const [showSignInModal, setShowSignInModal] = useState(false);

  const SignInModalCallback = useCallback(() => {
    return (
      <SignInModal
        showSignInModal={showSignInModal}
        setShowSignInModal={setShowSignInModal}
      />
    );
  }, [showSignInModal, setShowSignInModal]);

  return useMemo(
    () => ({ setShowSignInModal, SignInModal: SignInModalCallback }),
    [setShowSignInModal, SignInModalCallback],
  );
}
