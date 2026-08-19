"use client";

import { useEffect, useState } from "react";
import { signOut } from "next-auth/react";

type Inquiry = {
  id: string;
  name: string;
  email: string;
  destination: string | null;
  start: string | null;
  end: string | null;
  message: string | null;
  status: string;
  createdAt: string;
};

type MembershipApplication = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string | null;
  country: string | null;
  occupation: string | null;
  travelInterests: string | null;
  reason: string | null;
  referral: string | null;
  status: string;
  adminNotes: string | null;
  createdAt: string;
  updatedAt: string;
  reviewedAt: string | null;
};

export default function AdminPage() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
const [membershipApplications, setMembershipApplications] = useState<
  MembershipApplication[]
>([]);
const [loading, setLoading] = useState(true);
const [membershipLoading, setMembershipLoading] = useState(true);
const [error, setError] = useState("");
const [membershipError, setMembershipError] = useState("");
const [statusFilter, setStatusFilter] = useState("ALL");
  async function updateStatus(id: string, status: string) {
  try {
    const response = await fetch("/api/inquiries", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        status,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to update status");
    }

    setInquiries((current) =>
      current.map((inquiry) =>
        inquiry.id === id
          ? { ...inquiry, status }
          : inquiry
      )
    );
  } catch (error) {
    console.error(error);
    setError("Unable to update inquiry status.");
  }
}

  useEffect(() => {
    async function loadInquiries() {
      try {
        const response = await fetch("/api/inquiries");

        if (!response.ok) {
          throw new Error("Failed to load inquiries");
        }

        const data = await response.json();

        setInquiries(data);
      } catch (error) {
        console.error(error);
        setError("Unable to load inquiries.");
      } finally {
        setLoading(false);
      }
    }

    loadInquiries();
  }, []);

useEffect(() => {
  async function loadMembershipApplications() {
    try {
      const response = await fetch("/api/membership");

      if (!response.ok) {
        throw new Error("Failed to load membership applications");
      }

      const data = await response.json();

      setMembershipApplications(data);
    } catch (error) {
      console.error(error);
      setMembershipError(
        "Unable to load membership applications."
      );
    } finally {
      setMembershipLoading(false);
    }
  }



  loadMembershipApplications();
}, []);

async function updateMembershipStatus(
  id: string,
  status: string
) {
  try {
    const response = await fetch("/api/membership", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        status,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to update membership status");
    }

    const updatedApplication = await response.json();

    setMembershipApplications((current) =>
      current.map((application) =>
        application.id === id
          ? updatedApplication
          : application
      )
    );
  } catch (error) {
    console.error(error);
    setError("Unable to update membership status.");
  }
}

const filteredInquiries =
  statusFilter === "ALL"
    ? inquiries
    : inquiries.filter(
        (inquiry) => inquiry.status === statusFilter
      );

const totalInquiries = inquiries.length;

const newInquiries = inquiries.filter(
  (inquiry) => inquiry.status === "NEW"
).length;

const contactedInquiries = inquiries.filter(
  (inquiry) => inquiry.status === "CONTACTED"
).length;

const inProgressInquiries = inquiries.filter(
  (inquiry) => inquiry.status === "IN_PROGRESS"
).length;

const completedInquiries = inquiries.filter(
  (inquiry) => inquiry.status === "COMPLETED"
).length;

const archivedInquiries = inquiries.filter(
  (inquiry) => inquiry.status === "ARCHIVED"
).length;

const totalMembershipApplications =
  membershipApplications.length;

const pendingMembershipApplications =
  membershipApplications.filter(
    (application) => application.status === "PENDING"
  ).length;

const approvedMembershipApplications =
  membershipApplications.filter(
    (application) => application.status === "APPROVED"
  ).length;

const declinedMembershipApplications =
  membershipApplications.filter(
    (application) => application.status === "DECLINED"
  ).length;

const thisMonth = inquiries.filter((inquiry) => {
  const date = new Date(inquiry.createdAt);
  const now = new Date();

  return (
    date.getMonth() === now.getMonth() &&
    date.getFullYear() === now.getFullYear()
  );
}).length;

  return (
    <main className="min-h-screen bg-[#f5f1e8] px-6 py-16 text-[#292722]">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="border-b border-black/10 pb-8">

          <p className="text-[10px] uppercase tracking-[0.45em] text-[#a47b43]">
            Private Travel Club
          </p>

          <h1 className="mt-4 font-serif text-4xl font-light sm:text-5xl">
            Admin Dashboard
          </h1>

          <button
            onClick={() => signOut({ callbackUrl: "/login" })}
            className="mt-6 border border-[#292722]/20 px-5 py-3 text-[10px] uppercase tracking-[0.3em] transition hover:border-[#a47b43] hover:text-[#a47b43]"
          >
            Sign Out
          </button>

          <p className="mt-4 text-sm text-[#292722]/60">
            Manage membership inquiries and travel requests.
          </p>

        </div>

        {/* Statistics */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          <div className="border border-black/10 bg-white/50 p-6">
            <p className="text-[9px] uppercase tracking-[0.3em] text-black/45">
              Total Inquiries
            </p>

            <p className="mt-3 font-serif text-4xl">
              {loading ? "..." : totalInquiries}
            </p>
          </div>

          <div className="border border-black/10 bg-white/50 p-6">
            <p className="text-[9px] uppercase tracking-[0.3em] text-black/45">
              New
            </p>

            <p className="mt-3 font-serif text-4xl">
              {loading ? "..." : newInquiries}
            </p>
          </div>

          <div className="border border-black/10 bg-white/50 p-6">
            <p className="text-[9px] uppercase tracking-[0.3em] text-black/45">
              Contacted
            </p>

            <p className="mt-3 font-serif text-4xl">
              {loading ? "..." : contactedInquiries}
            </p>
          </div>

          <div className="border border-black/10 bg-white/50 p-6">
            <p className="text-[9px] uppercase tracking-[0.3em] text-black/45">
              In Progress
            </p>

            <p className="mt-3 font-serif text-4xl">
              {loading ? "..." : inProgressInquiries}
            </p>
          </div>

          <div className="border border-black/10 bg-white/50 p-6">
            <p className="text-[9px] uppercase tracking-[0.3em] text-black/45">
              Completed
            </p>

            <p className="mt-3 font-serif text-4xl">
              {loading ? "..." : completedInquiries}
            </p>
          </div>

          <div className="border border-black/10 bg-white/50 p-6">
            <p className="text-[9px] uppercase tracking-[0.3em] text-black/45">
              Archived
            </p>

            <p className="mt-3 font-serif text-4xl">
              {loading ? "..." : archivedInquiries}
            </p>
          </div>

          <div className="border border-black/10 bg-white/50 p-6">
            <p className="text-[9px] uppercase tracking-[0.3em] text-black/45">
              This Month
            </p>

            <p className="mt-3 font-serif text-4xl">
              {loading ? "..." : thisMonth}
            </p>
          </div>

        </div>

{/* Membership Statistics */}
<div className="mt-12 border-t border-black/10 pt-10">

  <p className="text-[10px] uppercase tracking-[0.4em] text-[#a47b43]">
    Membership
  </p>

  <h2 className="mt-2 font-serif text-3xl">
    Membership Applications
  </h2>

  <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

    <div className="border border-black/10 bg-white/50 p-6">
      <p className="text-[9px] uppercase tracking-[0.3em] text-black/45">
        Total
      </p>

      <p className="mt-3 font-serif text-4xl">
        {membershipLoading ? "..." : totalMembershipApplications}
      </p>
    </div>

    <div className="border border-black/10 bg-white/50 p-6">
      <p className="text-[9px] uppercase tracking-[0.3em] text-black/45">
        Pending
      </p>

      <p className="mt-3 font-serif text-4xl">
        {membershipLoading ? "..." : pendingMembershipApplications}
      </p>
    </div>

    <div className="border border-black/10 bg-white/50 p-6">
      <p className="text-[9px] uppercase tracking-[0.3em] text-black/45">
        Approved
      </p>

      <p className="mt-3 font-serif text-4xl">
        {membershipLoading ? "..." : approvedMembershipApplications}
      </p>
    </div>

    <div className="border border-black/10 bg-white/50 p-6">
      <p className="text-[9px] uppercase tracking-[0.3em] text-black/45">
        Declined
      </p>

      <p className="mt-3 font-serif text-4xl">
        {membershipLoading ? "..." : declinedMembershipApplications}
      </p>
    </div>

  </div>

</div>


{/* Membership Applications */}
<section className="mt-12">

  <div className="border-b border-black/10 pb-5">

    <p className="text-[10px] uppercase tracking-[0.4em] text-[#a47b43]">
      Membership
    </p>

    <h2 className="mt-2 font-serif text-3xl">
      Membership Applications
    </h2>

  </div>

  {membershipLoading && (
    <div className="mt-6 border border-black/10 bg-white/50 p-10 text-center">
      <p className="text-sm text-black/50">
        Loading membership applications...
      </p>
    </div>
  )}

  {!membershipLoading && membershipApplications.length === 0 && (
    <div className="mt-6 border border-black/10 bg-white/50 p-10 text-center">

      <p className="font-serif text-2xl font-light">
        No membership applications yet
      </p>

      <p className="mt-3 text-sm text-black/50">
        New membership applications will appear here.
      </p>

    </div>
  )}

  {!membershipLoading && membershipApplications.length > 0 && (
    <div className="mt-6 space-y-5">

      {membershipApplications.map((application) => (
        <article
          key={application.id}
          className="border border-black/10 bg-white/60 p-6"
        >

          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

            <div>

              <h3 className="font-serif text-2xl">
                {application.firstName} {application.lastName}
              </h3>

              <p className="mt-2 text-sm text-black/55">
                {application.email}
              </p>

            </div>

            <div className="text-left sm:text-right">

            <select
              value={application.status}
              onChange={(event) =>
                updateMembershipStatus(
                  application.id,
                  event.target.value
                )
              }
              className="border border-[#a47b43]/30 bg-transparent px-3 py-2 text-[9px] uppercase tracking-[0.25em] text-[#a47b43] outline-none"
            >
              <option value="PENDING">PENDING</option>
              <option value="APPROVED">APPROVED</option>
              <option value="DECLINED">DECLINED</option>
            </select>

              <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-black/40">
                {new Date(application.createdAt).toLocaleDateString()}
              </p>

            </div>

          </div>

          <div className="mt-6 grid gap-5 border-t border-black/10 pt-5 sm:grid-cols-2 lg:grid-cols-4">

            <div>
              <p className="text-[9px] uppercase tracking-[0.25em] text-black/40">
                Phone
              </p>

              <p className="mt-2 text-sm">
                {application.phone || "Not provided"}
              </p>
            </div>

            <div>
              <p className="text-[9px] uppercase tracking-[0.25em] text-black/40">
                Country
              </p>

              <p className="mt-2 text-sm">
                {application.country || "Not provided"}
              </p>
            </div>

            <div>
              <p className="text-[9px] uppercase tracking-[0.25em] text-black/40">
                Occupation
              </p>

              <p className="mt-2 text-sm">
                {application.occupation || "Not provided"}
              </p>
            </div>

            <div>
              <p className="text-[9px] uppercase tracking-[0.25em] text-black/40">
                Referral
              </p>

              <p className="mt-2 text-sm">
                {application.referral || "Not provided"}
              </p>
            </div>

          </div>

          <div className="mt-6 border-t border-black/10 pt-5">

            <p className="text-[9px] uppercase tracking-[0.25em] text-black/40">
              Travel Interests
            </p>

            <p className="mt-3 text-sm leading-7 text-black/65">
              {application.travelInterests || "Not provided"}
            </p>

          </div>

          <div className="mt-6 border-t border-black/10 pt-5">

            <p className="text-[9px] uppercase tracking-[0.25em] text-black/40">
              Why They Want to Join
            </p>

            <p className="mt-3 text-sm leading-7 text-black/65">
              {application.reason || "Not provided"}
            </p>

          </div>

        </article>
      ))}

    </div>
  )}

</section>


        {/* Inquiries */}
        <section className="mt-12">

          <div className="border-b border-black/10 pb-5">

            <p className="text-[10px] uppercase tracking-[0.4em] text-[#a47b43]">
              Requests
            </p>

            <h2 className="mt-2 font-serif text-3xl">
              Travel Inquiries
            </h2>

            <div className="mt-6">
              <select
                value={statusFilter}
                onChange={(event) => setStatusFilter(event.target.value)}
                className="border border-black/10 bg-white/60 px-4 py-3 text-[9px] uppercase tracking-[0.25em] outline-none"
              >
                <option value="ALL">All</option>
                <option value="NEW">New</option>
                <option value="CONTACTED">Contacted</option>
                <option value="IN_PROGRESS">In Progress</option>
                <option value="COMPLETED">Completed</option>
                <option value="ARCHIVED">Archived</option>
              </select>
            </div>

          </div>

          {loading && (
            <div className="mt-6 border border-black/10 bg-white/50 p-10 text-center">
              <p className="text-sm text-black/50">
                Loading inquiries...
              </p>
            </div>
          )}

          {error && (
            <div className="mt-6 border border-red-200 bg-red-50 p-6 text-center">
              <p className="text-sm text-red-700">
                {error}
              </p>
            </div>
          )}

          {!loading && !error && inquiries.length === 0 && (
            <div className="mt-6 border border-black/10 bg-white/50 p-10 text-center">

              <p className="font-serif text-2xl font-light">
                No inquiries yet
              </p>

              <p className="mt-3 text-sm text-black/50">
                New inquiries will appear here.
              </p>

            </div>
          )}

          {!loading && !error && inquiries.length > 0 && (
            <div className="mt-6 space-y-5">

              {filteredInquiries.map((inquiry) => (
                <article
                  key={inquiry.id}
                  className="border border-black/10 bg-white/60 p-6"
                >

                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

                    <div>

                      <h3 className="font-serif text-2xl">
                        {inquiry.name}
                      </h3>

                      <p className="mt-2 text-sm text-black/55">
                        {inquiry.email}
                      </p>

                      <select
                        value={inquiry.status}
                        onChange={(event) =>
                          updateStatus(inquiry.id, event.target.value)
                        }
                        className="mt-4 border border-[#a47b43]/30 bg-transparent px-3 py-2 text-[9px] uppercase tracking-[0.25em] text-[#a47b43] outline-none"
                      >
                        <option value="NEW">NEW</option>
                        <option value="CONTACTED">CONTACTED</option>
                        <option value="IN_PROGRESS">IN PROGRESS</option>
                        <option value="COMPLETED">COMPLETED</option>
                        <option value="ARCHIVED">ARCHIVED</option>
                      </select>

                    </div>

                    <p className="text-[9px] uppercase tracking-[0.25em] text-[#a47b43]">
                      {new Date(inquiry.createdAt).toLocaleDateString()}
                    </p>

                  </div>

                  <div className="mt-6 grid gap-4 border-t border-black/10 pt-5 sm:grid-cols-3">

                    <div>
                      <p className="text-[9px] uppercase tracking-[0.25em] text-black/40">
                        Destination
                      </p>

                      <p className="mt-2 text-sm">
                        {inquiry.destination || "Not specified"}
                      </p>
                    </div>

                    <div>
                      <p className="text-[9px] uppercase tracking-[0.25em] text-black/40">
                        Start
                      </p>

                      <p className="mt-2 text-sm">
                        {inquiry.start || "Not specified"}
                      </p>
                    </div>

                    <div>
                      <p className="text-[9px] uppercase tracking-[0.25em] text-black/40">
                        End
                      </p>

                      <p className="mt-2 text-sm">
                        {inquiry.end || "Not specified"}
                      </p>
                    </div>

                  </div>

                  {inquiry.message && (
                    <div className="mt-6 border-t border-black/10 pt-5">

                      <p className="text-[9px] uppercase tracking-[0.25em] text-black/40">
                        Message
                      </p>

                      <p className="mt-3 text-sm leading-7 text-black/65">
                        {inquiry.message}
                      </p>

                    </div>
                  )}

                    <div className="mt-6 border-t border-black/10 pt-5">
                      <a
                        href={`mailto:${inquiry.email}`}
                        className="inline-block border border-[#292722]/20 px-5 py-3 text-[10px] uppercase tracking-[0.3em] transition hover:border-[#a47b43] hover:text-[#a47b43]"
                      >
                        Reply by Email
                      </a>
                  </div>

                </article>
              ))}

            </div>
          )}

        </section>

      </div>
    </main>
  );
}