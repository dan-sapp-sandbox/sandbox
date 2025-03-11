"use client";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Player, usePartyState } from "../hooks/usePartyState";
import StyledInput from "./StyledInput";
import EditIcon from "@mui/icons-material/Edit";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Accordion from "@mui/material/Accordion";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

interface Props {
  player: Player;
}

const CharacterCard = ({ player }: Props) => {
  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm<Player>({
    defaultValues: player,
  });
  const { expanded, setExpanded, party, setParty } = usePartyState();
  const [readOnly, setReadOnly] = useState<boolean>(true);
  const onSubmit: SubmitHandler<Player> = (data) => {
    setParty(party.map((member) => {
      if (member.id !== player.id) {
        return member;
      }
      return data;
    }));
  };

  return (
    <div className="col-span-12 lg:col-span-6 xl:col-span-3 bg-blue-950 rounded-md border-solid border-2 border-zinc-400">
      <Accordion
        className="bg-blue-950 text-zinc-200"
        expanded={expanded}
      >
        <AccordionSummary
          id="accordion"
          className="bg-blue-950 text-zinc-200 my-1"
          onClick={() => setExpanded(!expanded)}
          expandIcon={
            <ArrowDropDownIcon fontSize="large" className="text-zinc-200" />
          }
        >
          <Typography
            fontSize="1.5rem"
            className="flex-grow text-center"
            component="span"
          >
            {player.name}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-row">
              <Typography
                fontSize="1.5rem"
                component="div"
              >
                Level {player.level} {player.class}
              </Typography>
              <button
                className="ml-auto p-2 flex justify-center items-center bg-blue-300 hover:bg-blue-200 rounded"
                onClick={() => setReadOnly(!readOnly)}
              >
                <EditIcon className="text-zinc-700" />
              </button>
            </div>
            <StyledInput
              register={register}
              title="HP"
              fieldName="hp"
              readOnly={readOnly}
            />
            <StyledInput
              register={register}
              title="Strength"
              fieldName="strength"
              readOnly={readOnly}
            />
            <StyledInput
              register={register}
              title="Dexterity"
              fieldName="dexterity"
              readOnly={readOnly}
            />
            <StyledInput
              register={register}
              title="Constitution"
              fieldName="constitution"
              readOnly={readOnly}
            />
            <StyledInput
              register={register}
              title="Intelligence"
              fieldName="intelligence"
              readOnly={readOnly}
            />
            <StyledInput
              register={register}
              title="Wisdom"
              fieldName="wisdom"
              readOnly={readOnly}
            />
            <StyledInput
              register={register}
              title="Charisma"
              fieldName="charisma"
              readOnly={readOnly}
            />
          </form>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default CharacterCard;
