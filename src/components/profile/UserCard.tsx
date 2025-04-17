
import { Heart, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface UserCardProps {
  id: string;
  name: string;
  age: number;
  location: string;
  bio: string;
  interests: string[];
  imageUrl: string;
  onLike?: (id: string) => void;
  onDislike?: (id: string) => void;
  onMessage?: (id: string) => void;
}

const UserCard = ({
  id,
  name,
  age,
  location,
  bio,
  interests,
  imageUrl,
  onLike,
  onDislike,
  onMessage
}: UserCardProps) => {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={name}
          className="h-full w-full object-cover"
        />
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-bold">{name}, {age}</h3>
            <p className="text-sm text-gray-500">{location}</p>
          </div>
        </div>
        <p className="text-sm mb-3 line-clamp-3">{bio}</p>
        <div className="flex flex-wrap gap-2">
          {interests.slice(0, 3).map((interest, index) => (
            <Badge key={index} variant="secondary" className="rounded-full">
              {interest}
            </Badge>
          ))}
          {interests.length > 3 && (
            <Badge variant="outline" className="rounded-full">
              +{interests.length - 3}
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Button 
          variant="outline" 
          size="icon" 
          className="rounded-full"
          onClick={() => onDislike?.(id)}
        >
          <X className="h-5 w-5 text-gray-500" />
        </Button>
        <Button 
          variant="outline" 
          size="icon" 
          className="rounded-full"
          onClick={() => onMessage?.(id)}
        >
          <MessageCircle className="h-5 w-5 text-blue-500" />
        </Button>
        <Button 
          variant="outline" 
          size="icon" 
          className="rounded-full"
          onClick={() => onLike?.(id)}
        >
          <Heart className="h-5 w-5 text-rose-500" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default UserCard;
