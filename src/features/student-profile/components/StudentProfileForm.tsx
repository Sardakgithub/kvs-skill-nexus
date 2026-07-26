"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { useAuthContext } from "@/providers/auth-provider";

import {
  StudentProfile,
  studentProfileService,
} from "@/features/student-profile/services/student-profile.service";

export default function StudentProfileForm() {
  const { user } = useAuthContext();

  const [profile, setProfile] = useState<StudentProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function loadProfile() {
      if (!user) return;

      try {
        const data = await studentProfileService.getProfile(user.uid);
        setProfile(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadProfile();
  }, [user]);

  function handleChange<K extends keyof StudentProfile>(
    key: K,
    value: StudentProfile[K]
  ) {
    if (!profile) return;

    setProfile({
      ...profile,
      [key]: value,
    });
  }

  async function handleSave() {
    if (!profile || !user) return;

    try {
      setSaving(true);

      const updated = await studentProfileService.updateProfile(
        user.uid,
        profile
      );

      setProfile(updated);

      alert("Profile updated successfully.");
    } catch (error) {
      console.error(error);
      alert("Failed to update profile.");
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return <div>Loading profile...</div>;
  }

  if (!profile) {
    return <div>Profile not found.</div>;
  }

  return (
    <div className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">Phone</label>
          <Input
            value={profile.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Location</label>
          <Input
            value={profile.location}
            onChange={(e) => handleChange("location", e.target.value)}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">College</label>
          <Input
            value={profile.college}
            onChange={(e) => handleChange("college", e.target.value)}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Degree</label>
          <Input
            value={profile.degree}
            onChange={(e) => handleChange("degree", e.target.value)}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Specialization
          </label>
          <Input
            value={profile.specialization}
            onChange={(e) =>
              handleChange("specialization", e.target.value)
            }
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Graduation Year
          </label>
          <Input
            type="number"
            value={profile.graduationYear}
            onChange={(e) =>
              handleChange(
                "graduationYear",
                Number(e.target.value)
              )
            }
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">Bio</label>
        <Textarea
          value={profile.bio}
          onChange={(e) => handleChange("bio", e.target.value)}
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Skills (comma separated)
        </label>

        <Input
          value={profile.skills.join(", ")}
          onChange={(e) =>
            handleChange(
              "skills",
              e.target.value
                .split(",")
                .map((skill) => skill.trim())
                .filter(Boolean)
            )
          }
        />
      </div>

      <Button onClick={handleSave} disabled={saving}>
        {saving ? "Saving..." : "Save Changes"}
      </Button>
    </div>
  );
}