import { Label } from "components/Label";
import { decodeMessage } from "../helpers";
import { getAccount } from "lib/sdkDappCore";

export const SignSuccess = ({
  messageToSign,
  signature,
}: {
  messageToSign: string;
  signature: string;
}) => {
  const { address } = getAccount();

  const { encodedMessage, decodedMessage } = decodeMessage({
    address,
    message: messageToSign,
    signature,
  });

  return (
    <div class="flex flex-col gap-6">
      <div class="flex flex-col w-[calc(100%-50px)]">
        <div class="flex flex-row w-full gap-2">
          <Label>Signature:</Label>

          <textarea
            readOnly
            class="w-full resize-none outline-none bg-transparent"
            rows={2}
            value={signature}
          />
        </div>

        <div class="flex flex-row w-full gap-2">
          <Label>Encoded message:</Label>
          <p>{encodedMessage}</p>
        </div>

        <div class="flex flex-row w-full gap-2">
          <Label>Decoded message:</Label>
          <textarea
            readOnly
            class="resize-none outline-none text-green-700 bg-transparent"
            rows={1}
            value={decodedMessage}
            placeholder="Decoded message"
          />
        </div>
      </div>
    </div>
  );
};
